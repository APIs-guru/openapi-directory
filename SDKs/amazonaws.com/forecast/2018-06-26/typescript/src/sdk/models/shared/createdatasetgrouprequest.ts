import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainEnum } from "./domainenum";
import { Tag } from "./tag";


export class CreateDatasetGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetArns" })
  datasetArns?: string[];

  @Metadata({ data: "json, name=DatasetGroupName" })
  datasetGroupName: string;

  @Metadata({ data: "json, name=Domain" })
  domain: DomainEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
