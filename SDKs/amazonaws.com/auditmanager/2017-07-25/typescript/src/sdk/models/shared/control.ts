import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControlMappingSource } from "./controlmappingsource";
import { ControlTypeEnum } from "./controltypeenum";



// Control
/** 
 *  A control in Audit Manager. 
**/
export class Control extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionPlanInstructions" })
  actionPlanInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=actionPlanTitle" })
  actionPlanTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=controlMappingSources", elemType: ControlMappingSource })
  controlMappingSources?: ControlMappingSource[];

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

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=testingInformation" })
  testingInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ControlTypeEnum;
}
