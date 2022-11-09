import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BinaryColumnStatisticsData } from "./binarycolumnstatisticsdata";
import { BooleanColumnStatisticsData } from "./booleancolumnstatisticsdata";
import { DateColumnStatisticsData } from "./datecolumnstatisticsdata";
import { DecimalColumnStatisticsData } from "./decimalcolumnstatisticsdata";
import { DoubleColumnStatisticsData } from "./doublecolumnstatisticsdata";
import { LongColumnStatisticsData } from "./longcolumnstatisticsdata";
import { StringColumnStatisticsData } from "./stringcolumnstatisticsdata";
import { ColumnStatisticsTypeEnum } from "./columnstatisticstypeenum";


// ColumnStatisticsData
/** 
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
**/
export class ColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=BinaryColumnStatisticsData" })
  binaryColumnStatisticsData?: BinaryColumnStatisticsData;

  @Metadata({ data: "json, name=BooleanColumnStatisticsData" })
  booleanColumnStatisticsData?: BooleanColumnStatisticsData;

  @Metadata({ data: "json, name=DateColumnStatisticsData" })
  dateColumnStatisticsData?: DateColumnStatisticsData;

  @Metadata({ data: "json, name=DecimalColumnStatisticsData" })
  decimalColumnStatisticsData?: DecimalColumnStatisticsData;

  @Metadata({ data: "json, name=DoubleColumnStatisticsData" })
  doubleColumnStatisticsData?: DoubleColumnStatisticsData;

  @Metadata({ data: "json, name=LongColumnStatisticsData" })
  longColumnStatisticsData?: LongColumnStatisticsData;

  @Metadata({ data: "json, name=StringColumnStatisticsData" })
  stringColumnStatisticsData?: StringColumnStatisticsData;

  @Metadata({ data: "json, name=Type" })
  type: ColumnStatisticsTypeEnum;
}
