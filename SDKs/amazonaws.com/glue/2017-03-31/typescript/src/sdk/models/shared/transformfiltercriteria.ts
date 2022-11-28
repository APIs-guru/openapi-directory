import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformTypeEnum } from "./transformtypeenum";



// TransformFilterCriteria
/** 
 * The criteria used to filter the machine learning transforms.
**/
export class TransformFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedAfter" })
  lastModifiedAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBefore" })
  lastModifiedBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Schema", elemType: SchemaColumn })
  schema?: SchemaColumn[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TransformStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TransformType" })
  transformType?: TransformTypeEnum;
}
