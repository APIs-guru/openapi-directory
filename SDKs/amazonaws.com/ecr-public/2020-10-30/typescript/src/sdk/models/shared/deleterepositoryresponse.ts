import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Repository } from "./repository";


export class DeleteRepositoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=repository" })
  repository?: Repository;
}
