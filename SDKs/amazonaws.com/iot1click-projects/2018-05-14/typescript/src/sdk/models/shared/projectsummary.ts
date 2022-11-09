import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSummary
/** 
 * An object providing summary information for a particular project for an associated AWS account and region.
**/
export class ProjectSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
