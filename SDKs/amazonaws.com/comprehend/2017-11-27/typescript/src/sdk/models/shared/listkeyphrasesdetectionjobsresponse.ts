import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyPhrasesDetectionJobProperties } from "./keyphrasesdetectionjobproperties";


export class ListKeyPhrasesDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyPhrasesDetectionJobPropertiesList", elemType: shared.KeyPhrasesDetectionJobProperties })
  keyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
