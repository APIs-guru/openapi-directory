import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergeBranchesByFastForwardInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;

  @Metadata({ data: "json, name=targetBranch" })
  targetBranch?: string;
}
