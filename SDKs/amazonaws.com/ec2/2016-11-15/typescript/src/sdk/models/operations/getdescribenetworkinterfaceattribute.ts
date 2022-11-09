import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeNetworkInterfaceAttributeActionEnum {
    DescribeNetworkInterfaceAttribute = "DescribeNetworkInterfaceAttribute"
}

export enum GetDescribeNetworkInterfaceAttributeAttributeEnum {
    Description = "description"
,    GroupSet = "groupSet"
,    SourceDestCheck = "sourceDestCheck"
,    Attachment = "attachment"
}

export enum GetDescribeNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeNetworkInterfaceAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute?: GetDescribeNetworkInterfaceAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeNetworkInterfaceAttributeVersionEnum;
}


export class GetDescribeNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDescribeNetworkInterfaceAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeNetworkInterfaceAttributeQueryParams;

  @Metadata()
  headers: GetDescribeNetworkInterfaceAttributeHeaders;
}


export class GetDescribeNetworkInterfaceAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
