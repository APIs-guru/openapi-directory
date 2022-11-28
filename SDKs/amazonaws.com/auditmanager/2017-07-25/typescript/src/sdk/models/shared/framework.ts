import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlSet } from "./controlset";
import { FrameworkTypeEnum } from "./frameworktypeenum";



// Framework
/** 
 *  The file used to structure and automate Audit Manager assessments for a given compliance standard. 
**/
export class Framework extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSets", elemType: ControlSet })
  controlSets?: ControlSet[];

  @SpeakeasyMetadata({ data: "json, name=controlSources" })
  controlSources?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FrameworkTypeEnum;
}
