import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeBranchesByFastForwardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationCommitSpecifier" })
  destinationCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitSpecifier" })
  sourceCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=targetBranch" })
  targetBranch?: string;
}
