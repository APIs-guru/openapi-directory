import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNamedQueryInput extends SpeakeasyBase {
    clientRequestToken?: string;
    database: string;
    description?: string;
    name: string;
    queryString: string;
    workGroup?: string;
}
