import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OperatorDbt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dbtArguments" })
  dbtArguments?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerImage" })
  dockerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=gitRepoBranch" })
  gitRepoBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=gitRepoUrl" })
  gitRepoUrl: string;
}
