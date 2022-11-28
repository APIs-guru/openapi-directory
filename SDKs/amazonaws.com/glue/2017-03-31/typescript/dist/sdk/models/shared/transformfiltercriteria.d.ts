import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformTypeEnum } from "./transformtypeenum";
/**
 * The criteria used to filter the machine learning transforms.
**/
export declare class TransformFilterCriteria extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    glueVersion?: string;
    lastModifiedAfter?: Date;
    lastModifiedBefore?: Date;
    name?: string;
    schema?: SchemaColumn[];
    status?: TransformStatusTypeEnum;
    transformType?: TransformTypeEnum;
}
