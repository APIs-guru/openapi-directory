import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Applications", elemType: shared.Application })
  applications?: Application[];

  @Metadata({ data: "json, name=AppstreamAgentVersion" })
  appstreamAgentVersion?: string;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=BaseImageArn" })
  baseImageArn?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ImageBuilderName" })
  imageBuilderName?: string;

  @Metadata({ data: "json, name=ImageBuilderSupported" })
  imageBuilderSupported?: boolean;

  @Metadata({ data: "json, name=ImageErrors", elemType: shared.ResourceError })
  imageErrors?: ResourceError[];

  @Metadata({ data: "json, name=ImagePermissions" })
  imagePermissions?: ImagePermissions;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Platform" })
  platform?: PlatformTypeEnum;

  @Metadata({ data: "json, name=PublicBaseImageReleasedDate" })
  publicBaseImageReleasedDate?: Date;

  @Metadata({ data: "json, name=State" })
  state?: ImageStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: ImageStateChangeReason;

  @Metadata({ data: "json, name=Visibility" })
  visibility?: VisibilityTypeEnum;
}
