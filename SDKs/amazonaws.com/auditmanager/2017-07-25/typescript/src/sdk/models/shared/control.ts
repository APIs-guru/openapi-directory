import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControlMappingSource } from "./controlmappingsource";
import { ControlTypeEnum } from "./controltypeenum";


// Control
/** 
 *  A control in Audit Manager. 
**/
export class Control extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionPlanInstructions" })
  actionPlanInstructions?: string;

  @Metadata({ data: "json, name=actionPlanTitle" })
  actionPlanTitle?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=controlMappingSources", elemType: shared.ControlMappingSource })
  controlMappingSources?: ControlMappingSource[];

  @Metadata({ data: "json, name=controlSources" })
  controlSources?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=testingInformation" })
  testingInformation?: string;

  @Metadata({ data: "json, name=type" })
  type?: ControlTypeEnum;
}
