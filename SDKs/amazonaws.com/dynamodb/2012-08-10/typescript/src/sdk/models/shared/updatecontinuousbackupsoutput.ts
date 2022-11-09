import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContinuousBackupsDescription } from "./continuousbackupsdescription";


export class UpdateContinuousBackupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContinuousBackupsDescription" })
  continuousBackupsDescription?: ContinuousBackupsDescription;
}
