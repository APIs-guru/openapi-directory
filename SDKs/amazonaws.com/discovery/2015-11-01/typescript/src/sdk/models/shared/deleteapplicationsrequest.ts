import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationIds" })
  configurationIds: string[];
}
