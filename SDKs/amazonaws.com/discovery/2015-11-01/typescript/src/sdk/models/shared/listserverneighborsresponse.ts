import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NeighborConnectionDetail } from "./neighborconnectiondetail";



export class ListServerNeighborsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knownDependencyCount" })
  knownDependencyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=neighbors", elemType: NeighborConnectionDetail })
  neighbors: NeighborConnectionDetail[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
