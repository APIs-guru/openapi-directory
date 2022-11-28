import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMetadata } from "./servicemetadata";



export class GetServicesInScopeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceMetadata", elemType: ServiceMetadata })
  serviceMetadata?: ServiceMetadata[];
}
