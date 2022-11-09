import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Repository } from "./repository";


export class CreateRepositoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=repository" })
  repository?: Repository;
}
