import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { ResourceError } from "./resourceerror";
import { ImagePermissions } from "./imagepermissions";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ImageStateEnum } from "./imagestateenum";
import { ImageStateChangeReason } from "./imagestatechangereason";
import { VisibilityTypeEnum } from "./visibilitytypeenum";



// Image
/** 
 * Describes an image.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Applications", elemType: Application })
  applications?: Application[];

  @SpeakeasyMetadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=BaseImageArn" })
  baseImageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageBuilderName" })
  imageBuilderName?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageBuilderSupported" })
  imageBuilderSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageErrors", elemType: ResourceError })
  imageErrors?: ResourceError[];

  @SpeakeasyMetadata({ data: "json, name=ImagePermissions" })
  imagePermissions?: ImagePermissions;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: PlatformTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PublicBaseImageReleasedDate" })
  publicBaseImageReleasedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ImageStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: ImageStateChangeReason;

  @SpeakeasyMetadata({ data: "json, name=Visibility" })
  visibility?: VisibilityTypeEnum;
}
