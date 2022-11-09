import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolvedComponentVersion } from "./resolvedcomponentversion";


export class ResolveComponentCandidatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resolvedComponentVersions", elemType: shared.ResolvedComponentVersion })
  resolvedComponentVersions?: ResolvedComponentVersion[];
}
