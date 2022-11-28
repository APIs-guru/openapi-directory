import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolvedComponentVersion } from "./resolvedcomponentversion";



export class ResolveComponentCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolvedComponentVersions", elemType: ResolvedComponentVersion })
  resolvedComponentVersions?: ResolvedComponentVersion[];
}
