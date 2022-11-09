import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceMetadata } from "./servicemetadata";


export class GetServicesInScopeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceMetadata", elemType: shared.ServiceMetadata })
  serviceMetadata?: ServiceMetadata[];
}
