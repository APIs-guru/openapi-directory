import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRegisterInstanceEventNotificationAttributesActionEnum {
    RegisterInstanceEventNotificationAttributes = "RegisterInstanceEventNotificationAttributes"
}


// GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute
/** 
 * Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
**/
export class GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=IncludeAllTagsOfInstance" })
  includeAllTagsOfInstance?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=InstanceTagKeys" })
  instanceTagKeys?: string[];
}

export enum GetRegisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRegisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterInstanceEventNotificationAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceTagAttribute" })
  instanceTagAttribute?: GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterInstanceEventNotificationAttributesVersionEnum;
}


export class GetRegisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
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


export class GetRegisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegisterInstanceEventNotificationAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetRegisterInstanceEventNotificationAttributesHeaders;
}


export class GetRegisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
