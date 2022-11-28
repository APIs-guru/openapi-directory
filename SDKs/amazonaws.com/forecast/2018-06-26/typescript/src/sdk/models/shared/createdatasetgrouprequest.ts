import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { Tag } from "./tag";



export class CreateDatasetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetArns" })
  datasetArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupName" })
  datasetGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
