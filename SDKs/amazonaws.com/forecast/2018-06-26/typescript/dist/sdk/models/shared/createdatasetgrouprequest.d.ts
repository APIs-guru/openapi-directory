import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainEnum } from "./domainenum";
import { Tag } from "./tag";
export declare class CreateDatasetGroupRequest extends SpeakeasyBase {
    datasetArns?: string[];
    datasetGroupName: string;
    domain: DomainEnum;
    tags?: Tag[];
}
