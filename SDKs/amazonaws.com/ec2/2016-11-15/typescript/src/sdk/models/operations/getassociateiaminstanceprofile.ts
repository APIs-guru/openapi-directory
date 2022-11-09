import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateIamInstanceProfileActionEnum {
    AssociateIamInstanceProfile = "AssociateIamInstanceProfile"
}


// GetAssociateIamInstanceProfileIamInstanceProfile
/** 
 * Describes an IAM instance profile.
**/
export class GetAssociateIamInstanceProfileIamInstanceProfile extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Arn" })
  arn?: string;

  @Metadata({ data: "queryParam, name=Name" })
  name?: string;
}

export enum GetAssociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateIamInstanceProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateIamInstanceProfileActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IamInstanceProfile" })
  iamInstanceProfile: GetAssociateIamInstanceProfileIamInstanceProfile;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateIamInstanceProfileVersionEnum;
}


export class GetAssociateIamInstanceProfileHeaders extends SpeakeasyBase {
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


export class GetAssociateIamInstanceProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateIamInstanceProfileQueryParams;

  @Metadata()
  headers: GetAssociateIamInstanceProfileHeaders;
}


export class GetAssociateIamInstanceProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
