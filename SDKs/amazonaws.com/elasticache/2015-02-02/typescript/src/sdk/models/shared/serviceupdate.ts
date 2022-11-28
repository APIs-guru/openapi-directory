import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateSeverityEnum } from "./serviceupdateseverityenum";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";



// ServiceUpdate
/** 
 * An update that you can apply to your Redis clusters.
**/
export class ServiceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoUpdateAfterRecommendedApplyByDate?: boolean;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  estimatedUpdateTime?: string;

  @SpeakeasyMetadata()
  serviceUpdateDescription?: string;

  @SpeakeasyMetadata()
  serviceUpdateEndDate?: Date;

  @SpeakeasyMetadata()
  serviceUpdateName?: string;

  @SpeakeasyMetadata()
  serviceUpdateRecommendedApplyByDate?: Date;

  @SpeakeasyMetadata()
  serviceUpdateReleaseDate?: Date;

  @SpeakeasyMetadata()
  serviceUpdateSeverity?: ServiceUpdateSeverityEnum;

  @SpeakeasyMetadata()
  serviceUpdateStatus?: ServiceUpdateStatusEnum;

  @SpeakeasyMetadata()
  serviceUpdateType?: ServiceUpdateTypeEnum;
}
