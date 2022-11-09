import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrameworkTypeEnum } from "./frameworktypeenum";


// AssessmentFrameworkMetadata
/** 
 *  The metadata associated with a standard or custom framework. 
**/
export class AssessmentFrameworkMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=controlSetsCount" })
  controlSetsCount?: number;

  @Metadata({ data: "json, name=controlsCount" })
  controlsCount?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: FrameworkTypeEnum;
}
