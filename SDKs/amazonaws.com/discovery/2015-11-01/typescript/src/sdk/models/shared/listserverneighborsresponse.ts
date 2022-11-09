import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NeighborConnectionDetail } from "./neighborconnectiondetail";


export class ListServerNeighborsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=knownDependencyCount" })
  knownDependencyCount?: number;

  @Metadata({ data: "json, name=neighbors", elemType: shared.NeighborConnectionDetail })
  neighbors: NeighborConnectionDetail[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
