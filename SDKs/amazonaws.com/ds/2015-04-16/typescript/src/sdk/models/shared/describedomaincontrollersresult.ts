import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainController } from "./domaincontroller";


export class DescribeDomainControllersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainControllers", elemType: shared.DomainController })
  domainControllers?: DomainController[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
