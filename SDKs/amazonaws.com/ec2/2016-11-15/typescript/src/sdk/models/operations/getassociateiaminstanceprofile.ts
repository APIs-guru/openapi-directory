import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateIamInstanceProfileActionEnum {
    AssociateIamInstanceProfile = "AssociateIamInstanceProfile"
}


// GetAssociateIamInstanceProfileIamInstanceProfile
/** 
 * Describes an IAM instance profile.
**/
export class GetAssociateIamInstanceProfileIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=Name" })
  name?: string;
}

export enum GetAssociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateIamInstanceProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateIamInstanceProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IamInstanceProfile" })
  iamInstanceProfile: GetAssociateIamInstanceProfileIamInstanceProfile;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateIamInstanceProfileVersionEnum;
}


export class GetAssociateIamInstanceProfileHeaders extends SpeakeasyBase {
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


export class GetAssociateIamInstanceProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateIamInstanceProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateIamInstanceProfileHeaders;
}


export class GetAssociateIamInstanceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
