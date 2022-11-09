import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRegisterInstanceEventNotificationAttributesActionEnum {
    RegisterInstanceEventNotificationAttributes = "RegisterInstanceEventNotificationAttributes"
}


// GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute
/** 
 * Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
**/
export class GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=IncludeAllTagsOfInstance" })
  includeAllTagsOfInstance?: boolean;

  @Metadata({ data: "queryParam, name=InstanceTagKeys" })
  instanceTagKeys?: string[];
}

export enum GetRegisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRegisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterInstanceEventNotificationAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceTagAttribute" })
  instanceTagAttribute?: GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterInstanceEventNotificationAttributesVersionEnum;
}


export class GetRegisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
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


export class GetRegisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegisterInstanceEventNotificationAttributesQueryParams;

  @Metadata()
  headers: GetRegisterInstanceEventNotificationAttributesHeaders;
}


export class GetRegisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
