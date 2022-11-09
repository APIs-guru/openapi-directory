import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Icd10CmEntity } from "./icd10cmentity";


export class InferIcd10CmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.Icd10CmEntity })
  entities: Icd10CmEntity[];

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;
}
