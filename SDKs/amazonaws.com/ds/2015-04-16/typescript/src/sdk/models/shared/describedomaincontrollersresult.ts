import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainController } from "./domaincontroller";



export class DescribeDomainControllersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainControllers", elemType: DomainController })
  domainControllers?: DomainController[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
