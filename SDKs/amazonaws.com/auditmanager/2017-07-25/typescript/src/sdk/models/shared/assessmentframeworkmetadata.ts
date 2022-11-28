import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrameworkTypeEnum } from "./frameworktypeenum";



// AssessmentFrameworkMetadata
/** 
 *  The metadata associated with a standard or custom framework. 
**/
export class AssessmentFrameworkMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetsCount" })
  controlSetsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=controlsCount" })
  controlsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FrameworkTypeEnum;
}
