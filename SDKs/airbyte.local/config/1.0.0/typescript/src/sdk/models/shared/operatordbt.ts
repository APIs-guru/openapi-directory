import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OperatorDbt extends SpeakeasyBase {
  @Metadata({ data: "json, name=dbtArguments" })
  dbtArguments?: string;

  @Metadata({ data: "json, name=dockerImage" })
  dockerImage?: string;

  @Metadata({ data: "json, name=gitRepoBranch" })
  gitRepoBranch?: string;

  @Metadata({ data: "json, name=gitRepoUrl" })
  gitRepoUrl: string;
}
