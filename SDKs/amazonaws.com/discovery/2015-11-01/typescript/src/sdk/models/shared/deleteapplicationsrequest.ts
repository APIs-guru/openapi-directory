import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationIds" })
  configurationIds: string[];
}
