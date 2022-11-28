import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetInstanceProtectionActionEnum {
    SetInstanceProtection = "SetInstanceProtection"
}

export enum GetSetInstanceProtectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSetInstanceProtectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetInstanceProtectionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" })
  instanceIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProtectedFromScaleIn" })
  protectedFromScaleIn: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetInstanceProtectionVersionEnum;
}


export class GetSetInstanceProtectionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetSetInstanceProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetInstanceProtectionQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetInstanceProtectionHeaders;
}


export class GetSetInstanceProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
