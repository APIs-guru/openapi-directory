import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    dataSources?: DataSource[];
    nextToken?: string;
}
