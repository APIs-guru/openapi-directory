import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSummary
/** 
 * An object providing summary information for a particular project for an associated AWS account and region.
**/
export class ProjectSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
