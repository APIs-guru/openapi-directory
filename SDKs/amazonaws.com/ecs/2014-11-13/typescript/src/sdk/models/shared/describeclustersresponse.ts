import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";
import { Failure } from "./failure";


export class DescribeClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.Cluster })
  clusters?: Cluster[];

  @Metadata({ data: "json, name=failures", elemType: shared.Failure })
  failures?: Failure[];
}
