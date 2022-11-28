import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinuousBackupsDescription } from "./continuousbackupsdescription";



export class UpdateContinuousBackupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContinuousBackupsDescription" })
  continuousBackupsDescription?: ContinuousBackupsDescription;
}
