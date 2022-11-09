import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RxNormEntity } from "./rxnormentity";


export class InferRxNormResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.RxNormEntity })
  entities: RxNormEntity[];

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
