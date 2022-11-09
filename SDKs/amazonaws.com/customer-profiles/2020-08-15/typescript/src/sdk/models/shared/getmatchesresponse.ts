import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchItem } from "./matchitem";


export class GetMatchesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MatchGenerationDate" })
  matchGenerationDate?: Date;

  @Metadata({ data: "json, name=Matches", elemType: shared.MatchItem })
  matches?: MatchItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PotentialMatches" })
  potentialMatches?: number;
}
