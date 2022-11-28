import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";



export class DeleteRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: Repository;
}
