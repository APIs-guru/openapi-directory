import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCopyImageActionEnum {
    CopyImage = "CopyImage"
}

export enum GetCopyImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCopyImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCopyImageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationOutpostArn" })
  destinationOutpostArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceImageId" })
  sourceImageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceRegion" })
  sourceRegion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCopyImageVersionEnum;
}


export class GetCopyImageHeaders extends SpeakeasyBase {
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


export class GetCopyImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCopyImageQueryParams;

  @Metadata()
  headers: GetCopyImageHeaders;
}


export class GetCopyImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
