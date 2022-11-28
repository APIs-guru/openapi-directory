import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RxNormEntity } from "./rxnormentity";



export class InferRxNormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: RxNormEntity })
  entities: RxNormEntity[];

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
