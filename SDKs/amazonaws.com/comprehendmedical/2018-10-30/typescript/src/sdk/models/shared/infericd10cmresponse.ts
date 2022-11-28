import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Icd10CmEntity } from "./icd10cmentity";



export class InferIcd10CmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: Icd10CmEntity })
  entities: Icd10CmEntity[];

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
