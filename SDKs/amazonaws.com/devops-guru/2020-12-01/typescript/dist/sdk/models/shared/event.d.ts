import { SpeakeasyBase } from "../../../internal/utils";
import { EventDataSourceEnum } from "./eventdatasourceenum";
import { EventClassEnum } from "./eventclassenum";
import { ResourceCollection } from "./resourcecollection";
import { EventResource } from "./eventresource";
/**
 *  An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
**/
export declare class Event extends SpeakeasyBase {
    dataSource?: EventDataSourceEnum;
    eventClass?: EventClassEnum;
    eventSource?: string;
    id?: string;
    name?: string;
    resourceCollection?: ResourceCollection;
    resources?: EventResource[];
    time?: Date;
}
