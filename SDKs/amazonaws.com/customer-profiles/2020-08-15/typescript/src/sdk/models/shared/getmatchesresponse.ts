import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchItem } from "./matchitem";



export class GetMatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MatchGenerationDate" })
  matchGenerationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Matches", elemType: MatchItem })
  matches?: MatchItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PotentialMatches" })
  potentialMatches?: number;
}
